export function parseCourseData(data) {
        
    let all_course_data = [];
    for (var i=0; i<data.length;i++) {
        single_course_info = data[i];
        course_info = {};

        course_info['courseTitle'] = single_course_info['Catalog Link'][0]
        course_info['catalog'] = single_course_info['Catalog Link'][1]

        course_info['courseName'] = single_course_info['Name']
        course_info['profName'] = single_course_info['RateMyProfessor Link'][0]

        course_info['rating'] = single_course_info['Rating']
        
        try {
            course_info['rateMyProfLink'] = single_course_info['RateMyProfessor Link'][1]
        }
        catch {
            // set hyperlink for professor to empty if there is no RMP
            course_info['rateMyProfLink'] = ""
        }

        course_info['preReq'] = single_course_info['Prerequisites']
        course_info['time'] = single_course_info['Times']

        // TODO: implement days when it is eventually passed to the front-end
        course_info['days'] = "MWF"

        // extract seat status and open information
        seats_info = single_course_info['Seats']

        // try to split seats
        try {
    
            seats_split = seats_info.split(": ")

            // splitting by status and seats
            course_info['seatStatus'] = seats_split[0]

            // check if course is open
            if (seats_split[1].includes("/")) {

                course_info['seatAval'] = seats_split[1].split("/")[0]
                course_info['seatTotal'] = seats_split[1].split("/")[1]
            }
            // if waitlisted, don't display total seats
            else {
                course_info['seatAval'] = seats_split[1]

                // TODO: IMPLEMENT WAITLISTED FOR MOBILE CARD
                course_info['seatTotal'] = 100
            }
        }
        // else it must be full
        catch {
            course_info['seatStatus'] = 'Closed'
            course_info['seatAval'] = 0
            course_info['seatTotal'] = 0
        }
        
        // save location
        course_info['location'] = single_course_info['Location'][0]

        // TODO: IMPLEMENT LATITUDE AND LONGITUDE
        course_info['latitutde'] = 35.785110
        course_info['longitude'] = -78.665860

        // add to data
        all_course_data.push(course_info);

    }

    // save state
    return all_course_data;
}