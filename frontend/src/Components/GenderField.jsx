function GenderField({ gender, setGender }) {
    const options = ["male", "female", "others"]
    return (
        <label>
            Gender
            <div className="gender-options">
                {options.map((option) => (
                    <span key={option}>
                        <input
                            type="radio"
                            name="gender"
                            value={option}
                            id={option}
                            checked={gender === option}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        <label htmlFor={option}>
                            {option[0].toUpperCase() + option.slice(1)}
                        </label>
                    </span>
                )

                )}
            </div>
        </label>
    );
}
export default GenderField;