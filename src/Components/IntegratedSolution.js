import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PerformanceImage from './Image/Performance-image.png'
import RoomShedulingImage from './Image/Room-Sheduling-image.png'

const IntegratedSolution = () => {
    // const FinalStep = ({ data }) => {

    //     const handleDownload = () => {
    //         var doc = new jsPDF();
    //         doc.text(
    //             10,
    //             10,
    //             "First Name: " + data.firstName +
    //             "Last Name: " + data.lastName +
    //             "Gender: " + data.gender +
    //             "Email: " + data.email +
    //             "Highest Degree: " + data.highestDegree +
    //             "Issued By: " + data.issuedBy +
    //             "Year of Passing: " + data.yearOfPassing +
    //             "Applied for: " + data.jobApplyFor +
    //             "Skills: " + data.skill +
    //             "Experience: " + data.workExperence +
    //             "Job Type: " + data.jobType +
    //             "Salary Expectation: " + data.expectedSalary

    //         );

    //         doc.save("form.pdf");
    //     };

    return (
        <Container className='IntegratedSolution'>
            <Row>
                <Col xs={0} sm={0} lg={1} xl={1} ></Col>
                <Col xs={12} sm={12} lg={10} xl={10} >
                    <h1 className='IntegratedSolution-heading'>
                        The Complete, integrated solution for people and workplace teams
                    </h1>
                </Col>
                <Col xs={0} sm={0} lg={1} xl={1} ></Col>

            </Row>
            <Row>
            <Col xs={0} sm={0} lg={1} xl={1} ></Col>
                <Col xs={12} sm={12} xl={5} lg={5} >
                    <div className='performance-box'>
                        <div>
                            <h3 className='performance-heading'>Performance Management</h3>
                        </div>
                        <p className='performance-text'>
                            Managing company-wide reviews should be flexible and
                            actionable. Collect 360-feedback, build fully-customizable
                            review cycles, access historical data, and make it easy for
                            admins to manage the review process.
                        </p>
                        <img className='PerformanceImage' src={PerformanceImage} alt="logo" />
                    </div>
                </Col>
            <Col xs={0} sm={0} lg={1} xl={1} ></Col>

                <Col xs={12} sm={12} xl={5} lg={5}>
                    <div className='room-box'>
                        <div>
                            <h3 className='room-heading'>Room Sheduling</h3>
                        </div>
                        <p className='room-text'>
                            Make meetings stress-free with Eden's room scheduling software. Book conference rooms, check In and out of meetings, and integrate meetings with Google Calendar and Slack.
                        </p>
                        <img className='RoomShedulingImage' src={RoomShedulingImage} alt="logo" />
                    </div>
                </Col>
            </Row>
            <Col></Col>


        </Container>

    )
}

export default IntegratedSolution