import {formatISO9075} from "date-fns";

export default function Post({title, summary, cover, content, createdAt, author}) {
    return (
        <div className="post">
            <div className="image">
                <img src="https://techcrunch.com/wp-content/uploads/2022/01/GettyImages-1208882806-1.jpg?resize=1536,1018" alt=""/>
            </div>
            <div className="texts">
                <h2>{title}</h2>
                <p className="info">
                    <a href="" className="author">{author.username}</a>
                    <time>{formatISO9075(new Date(createdAt))}</time>
                </p>
                <p className="summary">{summary}</p>
            </div>
        </div>
    );
}