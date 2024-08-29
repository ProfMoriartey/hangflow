

export default function events (){
    
    
return (
    <div className="overflow-x-auto p-5">
        <table className="min-w-full bg-transparent border opacity-15 dark:border-gray-200 border-black">
            <thead>
                <tr>
                    <th className="py-2 px-4 border-b dark:border-gray-200 border-black text-left dark:text-white text-black">Date</th>
                    <th className="py-2 px-4 border-b dark:border-gray-200 border-black text-left dark:text-white text-black">Event Name</th>
                    <th className="py-2 px-4 border-b dark:border-gray-200 border-black text-left dark:text-white text-black">Participants</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="py-2 px-4 border-b dark:border-gray-200 border-black dark:text-white text-black">20-06-2024</td>
                    <td className="py-2 px-4 border-b dark:border-gray-200 border-black dark:text-white text-black">Event 1</td>
                    <td className="py-2 px-4 border-b dark:border-gray-200 border-black dark:text-white text-black">5</td>                    
                </tr>
                <tr>
                <td className="py-2 px-4 border-b dark:border-gray-200 border-black dark:text-white text-black">20-07-2024</td>
                    <td className="py-2 px-4 border-b dark:border-gray-200 border-black dark:text-white text-black">Event 2</td>
                    <td className="py-2 px-4 border-b dark:border-gray-200 border-black dark:text-white text-black">3</td>  
                </tr>
                <tr>
                <td className="py-2 px-4 border-b dark:border-gray-200 border-black dark:text-white text-black">20-08-2024</td>
                    <td className="py-2 px-4 border-b dark:border-gray-200 border-black dark:text-white text-black">Event 3</td>
                    <td className="py-2 px-4 border-b dark:border-gray-200 border-black dark:text-white text-black">5</td>  
                </tr>
            </tbody>
        </table>
    </div>
)

}
