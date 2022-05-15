import React, { useState } from 'react';
import { generateKey } from '../../services/KeyService';

export default function Body() {
    const [numbers, setNumbers] = useState(null);
    const [stars, setStars] = useState(null);

    function handleGenerateKey() {
        const { orderedNumbers, orderedStars } = generateKey();

        setNumbers(orderedNumbers);
        setStars(orderedStars);
    }

    return (
        <>
            <div className="flex flex-grow flex-col gap-4 items-center justify-center">
                <div className="flex flex-row gap-4">
                    {numbers?.map((number, index) => (
                        <div key={`number_div_${number}_${index}`}>
                            <label
                                key={`number_label_${number}_${index}`}
                                className="text-lg"
                            >
                                {number}
                            </label>
                        </div>
                    ))}
                    {stars?.map((star, index) => (
                        <div key={`star_div_${star}_${index}`}>
                            <label
                                key={`star_label_${star}_${index}`}
                                className="text-lg text-yellow-500"
                            >
                                {star}
                            </label>
                        </div>
                    ))}
                </div>
                <div className="flex flex-row">
                    <button
                        type="button"
                        className="btn btn-wide rounded-none"
                        onClick={() => handleGenerateKey()}
                    >
                        Generate new key
                    </button>
                </div>
            </div>
        </>
    );
}
