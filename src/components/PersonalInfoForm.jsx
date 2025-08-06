const PersonalInfoForm = ({personalInfo, onChange}) => {
    return (
        <div className='flex flex-col gap-4 w-full mt-4'>
            <input
                type='text'
                placeholder="Full Name"
                value={personalInfo.name}
                name="name"
                onChange={onChange}
                className="bg-gray-200 border border-gray-300 rounded-md px-4 py-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />

            <input
                type='text'
                placeholder="Address"
                value={personalInfo.address}
                name="address"
                onChange={onChange}
                className="bg-gray-200 border border-gray-300 rounded-md px-4 py-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />

            <div className='flex flex-row gap-4 w-full'>
                <input
                    type='text'
                    placeholder="Email Address"
                    value={personalInfo.email}
                    name="email"
                    onChange={onChange}
                    className="bg-gray-200 border border-gray-300 rounded-md px-4 py-2 w-1/2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
                <input
                    type='text'
                    placeholder="Phone Number"
                    value={personalInfo.phone}
                    name="phone"
                    onChange={onChange}
                    className="bg-gray-200 border border-gray-300 rounded-md px-4 py-2 w-1/2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
            </div>
        </div>
    );
}

export default PersonalInfoForm;