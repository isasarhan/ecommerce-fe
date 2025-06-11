import { StarIcon } from 'lucide-react';
import type { FC } from 'react';

interface RatingProps {
    rating: number
}

const Rating: FC<RatingProps> = ({ rating }) => {
    return (
        <div className='flex gap-1'>
            {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon key={`rating-${star}`} className={`w-6 h-6 
                    ${rating >= star ? "fill-yellow-400 text-yellow-400" :
                     "fill-slate-200 text-slate-200"}`} />
            ))}
        </div>
    );
}

export default Rating;
