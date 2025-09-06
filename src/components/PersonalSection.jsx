const PersonalSection = ({personalInfo, onChange}) => {
    return (
        <div className='flex flex-col gap-4 w-full mt-4'>
            <input
                type='text'
                placeholder="Full Name"
                value={personalInfo.name}
                name="name"
                onChange={onChange}
                className="rounded-md px-4 py-2 w-full bg-stone-100 border border-lime-900 focus:ring-lime-600 text-stone-800 transition"
            />

            <input
                type='text'
                placeholder="Address"
                value={personalInfo.address}
                name="address"
                onChange={onChange}
                className="rounded-md px-4 py-2 w-full bg-stone-100 border border-lime-900 focus:ring-lime-600 text-stone-800 transition"
            />

            <div className='flex flex-row gap-4 w-full'>
                <input
                    type='text'
                    placeholder="Email Address"
                    value={personalInfo.email}
                    name="email"
                    onChange={onChange}
                    className="rounded-md px-4 py-2 w-1/2 bg-stone-100 border border-lime-900 focus:ring-lime-600 text-stone-800 transition"
                />
                <input
                    type='text'
                    placeholder="Phone Number"
                    value={personalInfo.phone}
                    name="phone"
                    onChange={onChange}
                    className="rounded-md px-4 py-2 w-1/2 bg-stone-100 border border-lime-900 focus:ring-lime-600 text-stone-800 transition"
                />
            </div>
        </div>
    );
}

export default PersonalSection;