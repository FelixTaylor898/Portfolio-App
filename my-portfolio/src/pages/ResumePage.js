import React from 'react';
import ResumeHeader from '../components/ResumeHeader';
import ResumeSection from '../components/ResumeSection';

import '../style/resume.css';

function ResumePage() {
    return (
        <div>
            <ResumeHeader />
            <ResumeSection />
        </div>

    );
}

export default ResumePage;