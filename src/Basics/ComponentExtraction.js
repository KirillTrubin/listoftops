//React-компоненты обязаны вести себя как чистые функции по отношению к своим пропсам.
/*
function Comment(props){
    return(
        <div>
            <div>
                <UserInfo user='props.author' />
            </div>
            <div>
                {props.text}
            </div>
            <div>
                {formatDate(props.date)}
            </div>
        </div>
    );
}

function Avatar(props){ //Извлечение аватарки автора
    return(
        <img
            src={props.user.avatarUrl} //Kirill.avatarUrl
            alt={props.user.name}       //Kirill.name
             />
    )
}

function UserInfo(props){ //Извлечение инфы об авторе
    return(
        <div>
            <Avatar user={props.user} />
            <div>
                {props.user.name}
            </div>
        </div>
    );
} 
*/