import './TitleBar.css';

export function TitleBar ({title}) {

    return(
        <div className="titleBar">
            <h3 className="title">{title}</h3>
        </div>
    )
}