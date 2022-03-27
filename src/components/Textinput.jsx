export default function Textinput({ label1, label2 })
{
    return (
        <div>
            <div>
                <label>{label1}</label> &nbsp; &nbsp; &nbsp;
                <input type="text" className="w-52 rounded-lg border-solid drop-shadow-lg h-9 ml-4"></input>
            </div>
            <br />
            <div>
                <label>{label2}</label> &nbsp; &nbsp; &nbsp;
                <input type="text" className="w-52 rounded-lg border-solid drop-shadow-lg h-9 ml-4 "></input>
            </div>
        </div>
    );
}