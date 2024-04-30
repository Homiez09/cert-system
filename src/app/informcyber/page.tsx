'use client'

import { Button, DatePicker, DatePickerProps, Input, Select, Upload } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import en from 'antd/es/date-picker/locale/en_US';
import dayjs from 'dayjs';
import { UploadOutlined } from '@ant-design/icons';

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

const defaultValue = dayjs(new Date());

export default function Page() {
    const onChange: DatePickerProps['onChange'] = (_, dateStr) => {
        console.log('onChange:', dateStr);
    };

    const handleTypeChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const handleCategoryChange = (value: string) => {
        console.log(`selected ${value}`);
    }

    const handleSeverityChange = (value: string) => {
        console.log(`selected ${value}`);
    }

    const handleHelpChange = (value: string) => {
        console.log(`selected ${value}`);
    }

    return (
        <div className="container max-w-5xl md:p-8 gap-5 w-full">
            <p className="text-2xl font-bold">KU-CERT แจ้งเหตุภัยคุกคาม</p>
            <form className="flex flex-col md:flex-row p-8 space-x-5">
                <div className="w-full space-y-3">
                    <div>
                        <p className="font-bold">หน่วยงาน</p>
                        <Input placeholder='หน่วยงาน' autoFocus />
                    </div>

                    <div><p className="font-bold">ติดต่อกลับ</p>
                        <Input placeholder='ติดต่อกลับ' />
                    </div>

                    <div><p className="font-bold">เหตุการณ์</p>
                        <TextArea placeholder='หน่วยงาน' />
                    </div>

                    <div><p className="font-bold">สาเหตุ</p>
                        <TextArea placeholder='สาเหตุ' />
                    </div>

                    <div><p className="font-bold">ผลกระทบ</p>
                        <TextArea placeholder='ผลกระทบ' />
                    </div>

                    <div><p className="font-bold">วัน-เวลาที่พบเหตุ</p>
                        <DatePicker
                            defaultValue={defaultValue}
                            showTime
                            locale={buddhistLocale}
                            onChange={onChange}
                        />
                    </div>
                </div>
                <div className="w-full space-y-3">
                    <div>
                        <p className="font-bold">ประเภทเหตุการณ์</p>
                        <Select
                            placeholder="เลือกประเภท"
                            className='w-full'
                            onChange={handleTypeChange}
                            options={[
                                { value: 'Malware', label: 'Malware' },
                                { value: 'Vulnerability', label: 'Vulnerability' },
                            ]}
                        />
                        {/* <Input placeholder='ประเภทเหตุการณ์' onSelect={} /> */}
                    </div>

                    <div>
                        <p className="font-bold">หมวดหมู่</p>
                        <Select
                            placeholder="เลือกหมวดหมู่"
                            className="w-full"
                            onChange={handleCategoryChange}
                            options={[
                                { value: 'Data Leak', label: 'ข้อมูลรั่วไหล' },
                                { value: 'Weaknesses', label: 'ช่องโหว่' },
                                { value: 'Misconfiguration', label: 'Misconfiguration' },
                                { value: 'Website Defacement', label: 'Website Defacement' },
                                { value: 'Website Phishing', label: 'Website Phishing' },
                                { value: "Other", label: "อื่นๆ" }
                            ]}
                        />
                    </div>

                    {/* <div><p className="font-bold">อื่นๆ</p>
                        <TextArea placeholder='หน่วยงาน' />
                    </div> */}

                    <div><p className="font-bold">ระดับความรุนแรง</p>
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
                        <p className="font-bold">ต้องการความช่วยเหลือหรือไม่</p>
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
                            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                            listType="picture"
                            multiple={false}
                        >
                            <Button icon={<UploadOutlined />}>Upload</Button>
                        </Upload>
                    </div>
                </div>
            </form>
        </div >
    )
}