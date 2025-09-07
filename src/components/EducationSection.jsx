const EducationSection = ({educationInfo, onChange}) => {
    return (  
        <div className='flex flex-col gap-4 w-full mt-4'>
        
            <input type='text' 
                placeholder='School Name'
                value = {educationInfo.school}
                name="school"
                onChange={onChange}
                className="font-inter rounded-md px-4 py-2 w-full bg-stone-100 border border-lime-900 focus:ring-lime-600 text-stone-800 transition"/>
        
            <input type='text' 
                placeholder='Location'
                value = {educationInfo.location}
                name="location"
                onChange={onChange}
                className="font-inter rounded-md px-4 py-2 w-full bg-stone-100 border border-lime-900 focus:ring-lime-600 text-stone-800 transition"/>
        
                   
                <input type='text' 
                    placeholder='Degree'
                    value = {educationInfo.degree}
                    name="degree"
                    onChange={onChange}
                    className="font-inter rounded-md px-4 py-2 w-full bg-stone-100 border border-lime-900 focus:ring-lime-600 text-stone-800 transition"/>
            
                <div className='flex flex-row gap-2'> 
                    <input type='text' 
                    placeholder='Start Date'
                    value = {educationInfo.startDate}
                    name="startDate"
                    onChange={onChange}
                    className="font-inter rounded-md px-4 py-2 w-1/2 bg-stone-100 border border-lime-900 focus:ring-lime-600 text-stone-800 transition"/>
                
                    <input type='text' 
                    placeholder='End Date'
                    value = {educationInfo.endDate}
                    name="endDate"
                    onChange={onChange}
                    className="font-inter rounded-md px-4 py-2 w-1/2 bg-stone-100 border border-lime-900 focus:ring-lime-600 text-stone-800 transition"/>
                </div>
                </div>
    );
}

export default EducationSection;