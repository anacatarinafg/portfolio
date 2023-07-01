'use client';
import React from 'react'
import '../work.css';

export default function index({ index, name, didWhat, setModal }) {
    return (
      <div onMouseEnter={() => { setModal({ active: true, index }) }} onMouseLeave={() => { setModal({ active: false, index }) }} className="project">
        <h2 className="project__name">{name}</h2>
        <p className="project__workIn">{didWhat}</p>
      </div>
    )
  }