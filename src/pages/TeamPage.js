import {TeamShowcase} from "../components";
import {members} from "../models";

const TeamPage = () => {
    return (
        <div>
            <TeamShowcase members={members} />
        </div>
    );
};

export default TeamPage;
