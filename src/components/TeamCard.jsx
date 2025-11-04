import { memo } from 'react';
import PropTypes from 'prop-types';

const TeamCard = memo(({ member }) => {
    return (
        <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="relative aspect-square overflow-hidden">
                <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                    {member.name}
                </h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium">
                    {member.role}
                </p>
            </div>
        </div>
    );
});

TeamCard.displayName = 'TeamCard';

TeamCard.propTypes = {
    member: PropTypes.shape({
        name: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};

export default TeamCard;
