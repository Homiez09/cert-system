import { Metadata } from "next";

const info = [
    "Office of Computer Services, Kasetsart University 50 Ngam Wong Wan Rd, Lat Yao Chatuchak Bangkok 10900",
    "Tel. +66 (0) 2562-0591 - 6 # 622501 (office), 622541-3 (helpdesk) and 622999 (Emergency)",
    "Fax. +66 (0) 2562-0590",
    "Website: www.ocs.ku.ac.th",
    "Facebook: www.facebook.com/ocs.ku",
    "E-Mail: webmaster-cpc@ku.ac.th"
]

export const metadata: Metadata = {
    title: 'ติดต่อเรา | KU-CERT',
    description: info.join('\n'),
    openGraph: {
        title: 'ติดต่อเรา | KU-CERT',
        description: info.join('\n'),
    },
};

export default function Page() {
    return (
        <div className="container mt-8 px-3 flex flex-col md:flex-row gap-5">
            <div className="flex flex-col w-full">
                <p className="font-bold text-xl">Office of Computer Services, Kasetsart University</p>
                <div className="text-lg pt-3">
                    {info.map((item, index) => {
                        return (
                            <p key={index} className="list-item list-inside">{item}</p>
                        )
                    })}
                </div>
            </div>
            <div className="flex flex-col w-full items-center">
                <iframe className="select-none w-full md:w-[500px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1087.0749779251157!2d100.56698556599532!3d13.845369368438611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ce725d44e5f%3A0x2d8c77dfc235fd03!2z4Liq4Liz4LiZ4Lix4LiB4Lia4Lij4Li04LiB4Liy4Lij4LiE4Lit4Lih4Lie4Li04Lin4LmA4LiV4Lit4Lij4LmMIOC4oeC4q-C4suC4p-C4tOC4l-C4ouC4suC4peC4seC4ouC5gOC4geC4qeC4leC4o-C4qOC4suC4quC4leC4o-C5jCDguJrguLLguIfguYDguILguJk!5e0!3m2!1sth!2sth!4v1715314566545!5m2!1sth!2sth" width="500" height="500" loading="lazy"></iframe>
                <iframe className="select-none w-full md:w-[500px]" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Focs.ku&tabs&width=500&&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=false&appId" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </div>
        </div>
    )
}