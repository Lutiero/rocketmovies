import {Container} from "./styles.js";
import { FiClock} from "react-icons/fi";
import PropTypes from "prop-types";

export function UserPostInfo({ data }) {

    return (
        <Container>
            <img src={data.urlProfile}
                 alt="Foto de unuário" />
            {data.name} <FiClock />{data.date}
        </Container>
    )
}

UserPostInfo.prototype = {
    data: PropTypes.object.isRequired,
}
