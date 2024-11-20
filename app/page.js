
import LikeButton from './like-button';

function Header({ title }) {

    return (
            <h1>{title}</h1>
    )
}

function HomePage () {
    const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

    return (
        <div>
            <Header title={"React: Develop, Preview, ship"}/>
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <LikeButton />
        </div>
)
}

export default HomePage