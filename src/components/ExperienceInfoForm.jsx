const ExperienceInfoForm = (experienceInfo, onChange) => {
    return (  
        <section className='flex flex-col gap-4 bg-gray-100 p-4 rounded-lg'>
                    <div> 
                        <label>
                            Position
                        </label>
                        <input type='text'
                            value={experienceInfo.position}
                            name="position"
                            onChange={onChange}
                            className="bg-gray-200 border border-black-200 rounded mt-2 ml-2 mb-4 w-2/3 px-2"/>
                    </div>
                    <div> 
                        <label>
                            Company
                        </label>
                        <input type='text'
                            value={experienceInfo.company}
                            name="company"
                            onChange={onChange}
                            className="bg-gray-200 border border-black-200 rounded mt-2 ml-2 mb-4 w-2/3 px-2"/>
                    </div>
                    <div className='flex flex-row gap-2'> 
                        <div>
                            <label>
                                Period
                            </label>
                            <input type='text'
                            value={experienceInfo.period}
                            name="period"
                            onChange={onChange}
                            className="bg-gray-200 border border-black-200 rounded mt-2 ml-2 mb-4 w-2/3 px-2"/>
                        </div>
                        <div>
                            <label>
                                Location
                            </label>
                            <input type='text'
                            value={experienceInfo.companyLoc}
                            name="companyLoc"
                            onChange={onChange}
                            className="bg-gray-200 border border-black-200 rounded mt-2 ml-2 mb-4 w-2/3 px-2"/>
                        </div>
                    </div>
                    <div>
                        <label>
                            Responsibilities
                        </label>
                        <input type='text'
                            value={experienceInfo.responsibilities}
                            name="responsibilities"
                            onChange={onChange}
                            className="bg-gray-200 border border-black-200 rounded mt-2 ml-2 mb-4 w-2/3 px-2"/>
                    </div>
                </section>
    );
}

export default ExperienceInfoForm;