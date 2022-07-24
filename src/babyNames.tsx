import babyNameData from "./babyNamesData.json"

export function BabyNamesStore() :JSX.Element{

    const strAscending = [...babyNameData].sort((a, b) =>
    a.name > b.name ? 1 : -1,);

    return(
        <>
            <h1 className="title">Baby Names</h1>

            {strAscending.map(baby => {
                return(
                    <button key={baby.id} className={baby.sex==="f" ?"female": "male"} >  
                        {baby.name}
                    </button>
                )
            })}

        </>
       
    )
}
// <div className={...(condition ? { className: 'on' } : {})}>