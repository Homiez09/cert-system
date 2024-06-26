import Link from "next/link";

export default () => {
    return (
        <div className="flex bg-secondary p-8 mt-16">
            <div className="container">
                <div className="flex flex-col space-y-5 md:flex-row justify-between">
                    <div className="flex flex-col">
                        <span className="font-bold">Office of Computer Services, Kasetsart University</span>
                        <span>50 Ngam Wong Wan Rd, Lat Yao Chatuchak Bangkok 10900</span>
                        <span>Tel. +66 (0) 2562-0591 - 6 # 622501 (office), 622541-3 (helpdesk) and 622999 (Emergency)</span>
                        <span>Fax. +66 (0) 2562-0590</span>
                    </div>
                    <div className="flex flex-col">
                        <Link href="https://www.ocs.ku.ac.th">www.ocs.ku.ac.th</Link>
                        <Link href="https://www.facebook.com/ocs.ku">www.facebook.com/ocs.ku</Link>
                        <Link href="mailto:webmaster-cpc@ku.ac.th">อีเมล์ : webmaster-cpc@ku.ac.th</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}