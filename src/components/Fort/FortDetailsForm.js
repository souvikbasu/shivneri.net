import React from 'react';
import TextInput from '../common/TextInput';


const FortDetailsForm = ({ fort, onChange, errors,saving ,onSave}) => {
    return (
        <form>  
            <TextInput
                name="fortName"
                label="fortName"
                value={fort.fortName}
                onChange={onChange}
                error={errors.fortName}
            />

            <TextInput
                name="fortPlace"
                label="fortPlace"
                value={fort.fortPlace}
                onChange={onChange}
                error={errors.fortPlace}
            />

            <TextInput
                name="fortConstructedYear"
                label="fortConstructedYear"
                value={fort.fortConstructedYear}
                onChange={onChange}
                error={errors.fortConstructedYear}
            />

            <input
                type="submit"
                disabled={saving}
                value={saving ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave} />

        </form>
    );
};

// FortDetailsForm.propTypes = {
//   fort: PropTypes.object.isRequired,
//   errors: PropTypes.object
// };

export default FortDetailsForm;