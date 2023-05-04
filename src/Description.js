import './Description.css'
import Button from '@material-ui/core/Button';


function Description() {
    return(
        <div className="description">
            <div className='flexCon'>
            <div className="text-box">

                <h1>UW Global Impact Tracker</h1>
                <h2>A networking tool and interactive Tableau dashboard that utilizes up-to-date 
                co-authored publication data obtained from the openAlex API to showcase UW faculty's 
                scholarship and collaborations across the world.</h2>
            </div>

            <div className="image-box">
                <img src={require("./imgs/dashboard.png")} alt="description-img" 
                width="300" height="200"/>
                <Button variant="contained" color="primary">
                </Button>
            </div>
            </div>

            <div className="text-box">
                <h1>Project Overview</h1>
                <p>The UW Office of Global Affairs (OGA) relies on the Global Publications Dashboard
                     to showcase UW faculty publications and co-authorships. 
                     While this tool is important for demonstrating the influence of UW faculty 
                     and alumni on academic publications worldwide, its user retention has decreased 
                     since the data source became outdated in 2019. Our project aims to update the dashboard 
                     with current data from the OpenAlex API and enhance the website's functionality 
                     with user-centered features.
                </p>
                
            </div>


            <div className="image-box">
            <img src={require("./imgs/DescriptionImg.png")} alt="description-img" width="200" height="200"/>
            </div>

            <div className="text-box">
                <h1>Target Stakeholders and Users</h1>
                <p>Stakeholders can access the Rosetta website through OGA's website. 
                    They will be able to view the dashboard to get an understanding of UW's
                     publications and co-authorships around the world. 
                     However, since our website mainly serves UW faculties,
                      users will need to log in with their UW credentials in order 
                      to utilize advanced features such as the Publications and the 
                      Scholars page. This is to maintain data integrity and for the 
                      development team to keep track of users' information as we allow 
                      users to upload their work. We want to prevent users from claiming 
                      publications that don't belong to them and support users from 
                      refreshing the database when they manually upload their work.
                </p>
            </div>

            <div className="text-box">
                <h1>Our Solution</h1>
                    <p><b>Refreshing Data</b></p>
                    <p>Since Microsoft Academic Graph stopped providing services, 
                        OGA decided to switch to OpenAlex as a new data source. We wrote 
                        a Python script to call on OpenAlex API and extracted 2M rows of 
                        updated publications data. The output dataset is published to OGA's 
                        MySQL server after going through another name-matching process with 
                        the UW HR database to facilitate data management and workflow at the 
                        production level. Therefore, we are able to visualize the global impact 
                        of the university by publishing a Tableau dashboard connected to the MySQL database. </p>

                    <p><b>Networking Tool</b></p>
                    <p>
                    After having stakeholder interviews and user testings, we noticed that 
                    our stakeholders, UW faculties, are interested in the percentile of 
                    UW's relationship with other institutions as well as connecting with 
                    scholars whose publications they are interested in. Hence, we developed 
                    a networking tool where users can browse scholars' profiles and reach 
                    out to others via email. They can also bookmark publications that they 
                    want to come back to later and find these publications under their profile 
                    page. We also encourage scholars to manually upload their publications to 
                    help refresh our database.

                    </p>

            </div>

            <div className="text-box">
                <h1>Meet the Team</h1>
                <div className='team-photos'>
                    <div className='photo'>
                        <img src={require("./imgs/vivian.png")} alt="Vivian Yu" width="150" height="150"></img>
                        <p>Vivian Yu</p>
                    </div>
                    <div className='photo'>
                        <img src={require("./imgs/kelly.png")} alt="Kelly Wang" width="150" height="150"></img>
                        <p>Kelly Wang</p>
                    </div>
                    <div className='photo'>
                        <img src={require("./imgs/lucy.png")} alt="Lucy Zhu" width="150" height="150"></img>
                        <p>Lucy Zhu</p>
                    </div>
                    <div className='photo'>
                        <img src={require("./imgs/james.png")} alt="Jinwoo Kim" width="150" height="150"></img>
                        <p>Jinwoo Kim</p>
                    </div>
                    <div className='photo'>
                        <img src={require("./imgs/jiali.png")} alt="Jiali Liu" width="150" height="150"></img>
                        <p>Jiali Liu</p>
                    </div>
                </div>
            </div>

            <div className="text-box">
                <h1>Project Status</h1>
                <p>As of May 3rd, 2023, the project is still ongoing. 
                    It will be transferred to the UW OGA for further 
                    development. For any questions, please contact 
                    Sudha Sharma at ssudha@uw.edu.
                </p>
            </div>
        </div>
    )
}

export default Description;