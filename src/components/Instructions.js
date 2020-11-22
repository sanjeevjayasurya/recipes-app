import React from "react"

export default function Instructions({title, steps}){
    <section className="instructions">
    <h3> Cooking instruction </h3>
    {steps.map((step,i) => (
        <p key={i}>{step}</p>
    ))}
</section>
}