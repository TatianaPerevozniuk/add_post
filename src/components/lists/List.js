import {useSelector} from "react-redux";
import CardInfo from "./CardInfo";

const List = () => {
    const posts = useSelector(state => state.posts);

    return (
        posts.map( post => <CardInfo {...post} key = {post.id}/>)
    );
};

export default List;