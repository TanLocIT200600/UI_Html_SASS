import React from 'react'

const CheckList = () => {
  return (
    <div className="checkList">
      <p>The lawyers’ hub offers the nexus between Tech and the Law in the following ways:
      </p>
      <div className="checkList__item">
        <ul>
          <li><i className="fas fa-check"></i>Start Up incubation.</li>
          <li><i className="fas fa-check"></i>Co-Innovation Space for Lawyers.</li>
          <li><i className="fas fa-check"></i>Legal and Policy Support for Startups and innovators.</li>
        </ul>
        <ul>
          <li><i className="fas fa-check"></i>Trainings and events.</li>
          <li><i className="fas fa-check"></i>Mentorship.</li>
        </ul>
      </div>
    </div>
  )
}

export default CheckList
