const PersonalInfoForm = ({personalInfo, onChange}) => {
    return (  
        <section className='flex flex-col gap-4 bg-gray-100 p-4 rounded-lg'>
                <div>
                    <label> 
                        Name: 
                    </label>
                    <input type='text'
                            value={personalInfo.name}
                            name="name"
                            onChange={onChange}
                            className="bg-gray-200 border border-black-200 rounded mt-2 ml-2 mb-4 w-2/3 px-2"/> 
                </div>
                <div>
                    <label> 
                        Address: 
                    </label>
                    <input type='text'
                            value={personalInfo.address}
                            name="address"
                            onChange={onChange}
                            className="bg-gray-200 border border-black-200 rounded mt-2 ml-2 mb-4 w-2/3 px-2"/>
                </div>
                <div className='flex flex-row gap-2'>
                    <div>
                        <label> 
                            Email: 
                        </label>
                        <input type='text'
                            value={personalInfo.email}
                            name="email"
                            onChange={onChange}
                            className="bg-gray-200 border border-black-200 rounded mt-2 ml-2 mb-4 w-3/4 px-2"/>
                    </div>
                    <div>
                        <label> 
                            Phone:
                        </label>
                        <input type='text'
                            value={personalInfo.phone}
                            name="phone"
                            onChange={onChange}
                            className="bg-gray-200 border border-black-200 rounded mt-2 ml-2 mb-4 w-1/2 px-2"/>
                    </div>
                </div>
                </section>
    );
}

export default PersonalInfoForm;