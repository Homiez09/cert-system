import { ICategory } from "./CardList";

export default function Card({ form, onClick, select } : { form: ICategory, onClick: any, select: any } ) {
    return (
        <div className={`flex flex-col justify-between w-full rounded-xl text-center pt-3 shadow-lg cursor-pointer ${select == form.title ? "border-2 border-black " : " "}` + form.colorTailwind2} onClick={()=>onClick(form.title)}>
            <p>{form.title}</p>
            <div className={`w-full rounded-b-xl mt-3 py-2 ` + form.colorTailwind1}>
                <small className="font-bold">{form.number}</small>
            </div>
        </div>
    )
}

export function CardSkeleton({ form } : { form: ICategory }) {
    return (
        <div className="w-full rounded-xl text-center pt-3 shadow-lg bg-hover">
            <p className="animate-pulse">{form.title}</p>
            <div className="w-full rounded-b-xl mt-3 py-2 bg-primary animate-pulse">
                <small className="font-bold">Loading</small>
            </div>
        </div>
    )
}