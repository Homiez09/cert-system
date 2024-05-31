'use client'

import { Button, DatePicker, DatePickerProps, Input, Select, Upload } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import en from 'antd/es/date-picker/locale/en_US';
import { UploadOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { IForm } from '@/interfaces/IForm';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const buddhistLocale: typeof en = {
    ...en,
    lang: {
        ...en.lang,
        fieldDateFormat: 'YYYY-MM-DD',
        fieldDateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
        yearFormat: 'YYYY',
        cellYearFormat: 'YYYY',
    },
};

export default function Page() {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [isComplete, setIsComplete] = useState(false);
    const [isErrorSubmit, setIsErrorSubmit] = useState(false);

    const [form, setForm] = useState<IForm>({
        agency: null,
        contact: null,
        email: null,
        event: null,
        cause: null,
        impact: null,
        dateAndTime: null,
        eventType: null,
        category: null,
        other: null,
        severity: null,
        needAssistance: null,
        images: null,
    });

    const checkForm = () => {
        const requiredFields = ['agency', 'contact', 'email', 'event', 'cause', 'impact', 'dateAndTime', 'eventType', 'category', 'severity', 'needAssistance']
        const isCompleteTemp = requiredFields.every(field => form[field as keyof typeof form] !== null && form[field as keyof typeof form] !== "");

        setIsComplete(isCompleteTemp);
    };

    const onDateChange: DatePickerProps['onChange'] = (_, dateStr) => {
        handleSelectChange('dateAndTime', _?.toDate());
    };

    const handleTypeChange = (value: string) => {
        handleSelectChange('eventType', value);
    };

    const handleCategoryChange = async (value: string) => {
        setForm((prevForm) => {
            const updatedForm = { ...prevForm, category: value };

            if (value !== 'Other') {
                updatedForm.other = null;
            }

            return updatedForm;
        });
    };

    const handleSeverityChange = (value: string) => {
        handleSelectChange('severity', value);
    };

    const handleHelpChange = (value: string) => {
        handleSelectChange('needAssistance', value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!executeRecaptcha) {
            console.log("not available to execute recaptcha");
            return;
        }

        const gRecaptchaToken = await executeRecaptcha('sumbit');

        const response = await axios({
            method: 'post',
            url: "/api/recaptchaSubmit",
            data: {
                gRecaptchaToken,
            },
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            }
        });

        if (response?.data?.success) {
            const formData = new FormData();
            formData.append('data', JSON.stringify(form));
            form.images?.map((image: any) => formData.append('files.image', image.originFileObj))

            toast.promise(
                axios.post(`${process.env.NEXT_PUBLIC_URL}/api/informcyber`, formData).then(res => {
                    if (res.status === 200) {
                        window.location.reload();
                    }
                }), {
                loading: 'Saving...',
                success: <b>Saved!</b>,
                error: <b>Could not save.</b>,
            }
            );
        } else {
            setIsErrorSubmit(true)
        }
    };

    const handleSelectChange = (key: string, value: string | Date | null) => {
        setForm({ ...form, [key]: value });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | any) => {
        if (e.fileList) {
            setForm({ ...form, images: e.fileList })
        } else {
            setForm({ ...form, [e.target.name]: e.target.value })
        }
    };

    useEffect(() => {
        checkForm();
    }, [form]);

    return (
        <div className="container max-w-5xl md:p-8 gap-5 w-full">
            <p className="text-2xl font-bold px-3 md:px-0">KU-CERT แจ้งเหตุภัยคุกคาม</p>
            <form className="flex flex-col items-center" onSubmit={handleSubmit}>
                <div className="flex flex-col w-full md:flex-row p-8 md:space-x-5 max-md:space-y-5">
                    <div className="w-full space-y-3">
                        <div><p className="font-bold">หน่วยงาน*</p>
                            <Input placeholder='หน่วยงาน' name="agency" onChange={handleChange} required autoFocus />
                        </div>

                        <div><p className="font-bold">ติดต่อกลับ*</p>
                            <Input placeholder='0XXXXXXXXX' name="contact" onChange={handleChange} required />
                        </div>

                        <div><p className="font-bold">อีเมล*</p>
                            <Input placeholder='xxxx@ku.th' name="email" type='email' onChange={handleChange} required />
                        </div>

                        <div><p className="font-bold">เหตุการณ์*</p>
                            <TextArea placeholder='เหตุการณ์' name="event" onChange={handleChange} required />
                        </div>

                        <div><p className="font-bold">สาเหตุ*</p>
                            <TextArea placeholder='สาเหตุ' name="cause" onChange={handleChange} required />
                        </div>

                        <div><p className="font-bold">ผลกระทบ*</p>
                            <TextArea placeholder='ผลกระทบ' name="impact" onChange={handleChange} required />
                        </div>

                        <div><p className="font-bold">วัน-เวลาที่พบเหตุ*</p>
                            <DatePicker
                                showTime
                                locale={buddhistLocale}
                                onChange={onDateChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="w-full space-y-3">
                        <div>
                            <p className="font-bold">ประเภทเหตุการณ์*</p>
                            <Select
                                placeholder="เลือกประเภท"
                                className='w-full'
                                onChange={handleTypeChange}
                                options={[
                                    { value: 'Malware', label: 'Malware' },
                                    { value: 'Vulnerability', label: 'Vulnerability' },
                                ]}
                                notFoundContent="ไม่พบข้อมูล"
                            />
                        </div>

                        <div>
                            <p className="font-bold">หมวดหมู่*</p>
                            <Select
                                placeholder="เลือกหมวดหมู่"
                                className="w-full"
                                onChange={handleCategoryChange}
                                options={[
                                    { value: 'Defecement', label: 'Defecement' },
                                    { value: 'Gambling', label: 'Gambling' },
                                    { value: 'Malware', label: 'Malware' },
                                    { value: "Other", label: "Other" }
                                ]}
                            />
                        </div>

                        {form.category === 'Other' && <div>
                            <p className="font-bold">ระบุหมวดหมู่*</p>
                            <Input placeholder='ระบุหมวดหมู่' name="other" onChange={handleChange} defaultValue={form.other || ""} required />
                        </div>}

                        <div>
                            <p className="font-bold">ระดับความรุนแรง*</p>
                            <Select
                                placeholder="เลือกระดับความรุนแรง"
                                className="w-full"
                                onChange={handleSeverityChange}
                                options={[
                                    { value: 'Low Level', label: 'ระดับต่ำ' },
                                    { value: 'Medium Level', label: 'ระดับกลาง' },
                                    { value: 'High Level', label: 'ระดับสูง' },
                                ]}
                            />
                        </div>

                        <div>
                            <p className="font-bold">ต้องการความช่วยเหลือหรือไม่*</p>
                            <Select
                                placeholder="เลือกความช่วยเหลือ"
                                className="w-full"
                                onChange={handleHelpChange}
                                options={[
                                    { value: 'Need', label: 'ต้องการความช่วยเหลือ' },
                                    { value: 'No', label: 'ไม่ต้องการความช่วยเหลือ' },
                                ]}
                            />
                        </div>

                        <div>
                            <p className="font-bold">รูปภาพ</p>
                            <Upload
                                listType="picture"
                                multiple
                                onChange={handleChange}
                                accept="image/png, image/webp, image/jpg, image/jpeg"
                                beforeUpload={() => false}
                                maxCount={5}
                            >
                                <Button icon={<UploadOutlined />}>Upload</Button>
                            </Upload>
                        </div>
                    </div>
                </div>
                {isErrorSubmit && <p className="text-red-500 p-3">Failed to Verify recaptcha! You must be a robot!</p>}
                <button className="rounded-lg px-5 py-2 bg-success text-white disabled:bg-[#9FECA1]" type="submit" disabled={!isComplete}>แจ้งเหตุ</button>
            </form>
        </div >
    )
}