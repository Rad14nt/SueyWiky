import {TeamShowcase} from "../components";
import {members} from "../models";

const TeamPage = () => {
    return <TeamShowcase members={members} />;
};

export default TeamPage;
