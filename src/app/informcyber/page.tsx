import { DatePicker, DatePickerProps, Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import en from 'antd/es/date-picker/locale/en_US';
import dayjs from 'dayjs';

const buddhistLocale: typeof en = {
    ...en,
    lang: {
        ...en.lang,
        fieldDateFormat: 'BBBB-MM-DD',
        fieldDateTimeFormat: 'BBBB-MM-DD HH:mm:ss',
        yearFormat: 'BBBB',
        cellYearFormat: 'BBBB',
    },
};

const defaultValue = dayjs(new Date());

export default function Page() {
    const onChange: DatePickerProps['onChange'] = (_, dateStr) => {
        console.log('onChange:', dateStr);
    };


    return (
        <div className="container max-w-5xl md:p-8 gap-5 w-full">
            <p className="text-2xl font-bold">KU-CERT แจ้งเหตุภัยคุกคาม</p>
            <form className="flex flex-col md:flex-row p-8 border">
                <div className="w-full space-y-3">
                    <p className="font-bold">หน่วยงาน</p>
                    <Input placeholder='หน่วยงาน' />

                    <p className="font-bold">ติดต่อกลับ</p>
                    <Input placeholder='หน่วยงาน' />

                    <p className="font-bold">เหตุการณ์</p>
                    <TextArea placeholder='หน่วยงาน' />

                    <p className="font-bold">สาเหตุ</p>
                    <TextArea placeholder='สาเหตุ' />

                    <p className="font-bold">ผลกระทบ</p>
                    <TextArea placeholder='ผลกระทบ' />

                    <p className="font-bold">วันที่พบเหตุ</p>
                    <DatePicker
                        defaultValue={defaultValue}
                        showTime
                        locale={buddhistLocale}
                        onChange={onChange}
                    />

                </div>
                <div className="w-full">ff</div>

            </form>


        </div >
    )
}


/* 
หน่วยงาน
ติดต่อกลับ
เหตุการณ์
สาเหตุ
ผลกระทบ
วันที่พบเหตุ
เวลาที่พบเหตุ
ประเภทเหตุการณ์
หมวดหมู่
อื่นๆ
ระดับความรุนแรง
ต้องการความช่วยเหลือหรือไม่
รูปภาพ
*/

