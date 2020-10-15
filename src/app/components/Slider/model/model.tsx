import { SlideData } from "../types";

import React from 'react';

interface ISlideModel {
    data: SlideData[],
    createSlideGroups: (data: SlideData[], slidesInGroup: number) => SlideData[][]
}

export const SlidesModel: ISlideModel = {
    data: [
        {
          key: "1",
          children: <div style={{display: "flex", flexDirection: "column", justifyContent: "center", height: "10em"}}>
            <h1 style={{fontSize: "1.5em"}}>Behavioral patterns</h1>
          </div>
        },
        {
          key: "2",
          children: <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h1 style={{fontSize: "1.2em"}}>Chain of Responsibility</h1>
            <p style={{fontSize: "0.7em", textAlign: "center"}}>Chain of Responsibility is a behavioral design pattern that lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.</p>
            <img
              src="https://refactoring.guru/images/patterns/content/chain-of-responsibility/chain-of-responsibility.png"
              alt="Chain of responsibility"
              width="50%"
            />
          </div>
        },
        {
          key: "3",
          children: <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h1 style={{fontSize: "1.2em"}}>Command</h1>
            <p style={{fontSize: "0.7em", textAlign: "center"}}>Command is a behavioral design pattern that turns a request into a stand-alone object that contains all information about the request. This transformation lets you parameterize methods with different requests, delay or queue a request’s execution, and support undoable operations.</p>
            <img
              src="https://refactoring.guru/images/patterns/content/command/command-en.png"
              alt="Chain of responsibility"
              width="50%"
            />
          </div>
        },
        {
          key: "4",
          children: <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h1 style={{fontSize: "1.2em"}}>Iterator</h1>
            <p style={{fontSize: "0.7em", textAlign: "center"}}>Iterator is a behavioral design pattern that lets you traverse elements of a collection without exposing its underlying representation (list, stack, tree, etc.).</p>
            <img
              src="https://refactoring.guru/images/patterns/content/iterator/iterator-en.png"
              alt="Chain of responsibility"
              width="50%"
            />
          </div>
        },
        {
          key: "5",
          children: <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h1 style={{fontSize: "1.2em"}}>Mediator</h1>
            <p style={{fontSize: "0.7em", textAlign: "center"}}>Mediator is a behavioral design pattern that lets you reduce chaotic dependencies between objects. The pattern restricts direct communications between the objects and forces them to collaborate only via a mediator object.</p>
            <img
              src="https://refactoring.guru/images/patterns/content/mediator/mediator.png"
              alt="Chain of responsibility"
              width="50%"
            />
          </div>
        },
        {
          key: "6",
          children: <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h1 style={{fontSize: "1.2em"}}>Memento</h1>
            <p style={{fontSize: "0.7em", textAlign: "center"}}>Memento is a behavioral design pattern that lets you save and restore the previous state of an object without revealing the details of its implementation.</p>
            <img
              src="https://refactoring.guru/images/patterns/content/memento/memento-en.png"
              alt="Chain of responsibility"
              width="50%"
            />
          </div>
        },
        {
          key: "7",
          children: <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h1 style={{fontSize: "1.2em"}}>Observer</h1>
            <p style={{fontSize: "0.7em", textAlign: "center"}}>Observer is a behavioral design pattern that lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they’re observing.</p>
            <img
              src="https://refactoring.guru/images/patterns/content/observer/observer.png"
              alt="Chain of responsibility"
              width="50%"
            />
          </div>
        },
        {
          key: "8",
          children: <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h1 style={{fontSize: "1.2em"}}>State</h1>
            <p style={{fontSize: "0.7em", textAlign: "center"}}>State is a behavioral design pattern that lets an object alter its behavior when its internal state changes. It appears as if the object changed its class.</p>
            <img
              src="https://refactoring.guru/images/patterns/content/state/state-en.png"
              alt="Chain of responsibility"
              width="50%"
            />
          </div>
        },
        {
          key: "9",
          children: <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h1 style={{fontSize: "1.2em"}}>Strategy</h1>
            <p style={{fontSize: "0.7em", textAlign: "center"}}>Strategy is a behavioral design pattern that lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable.</p>
            <img
              src="https://refactoring.guru/images/patterns/content/strategy/strategy.png"
              alt="Chain of responsibility"
              width="50%"
            />
          </div>
        },
        {
          key: "10",
          children: <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h1 style={{fontSize: "1.2em"}}>Template Method</h1>
            <p style={{fontSize: "0.7em", textAlign: "center"}}>Template Method is a behavioral design pattern that defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.</p>
            <img
              src="https://refactoring.guru/images/patterns/content/template-method/template-method.png"
              alt="Chain of responsibility"
              width="50%"
            />
          </div>
        },
        {
          key: "11",
          children: <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h1 style={{fontSize: "1.2em"}}>Visitor</h1>
            <p style={{fontSize: "0.7em", textAlign: "center"}}>Visitor is a behavioral design pattern that lets you separate algorithms from the objects on which they operate.</p>
            <img
              src="https://refactoring.guru/images/patterns/content/visitor/visitor.png"
              alt="Chain of responsibility"
              width="50%"
            />
          </div>
        },
    ],
    createSlideGroups: (data, slidesInGroup) => {
        let group: SlideData[] = [];

        return data.reduce((accumulator: any, curSlide: any, i: number) => {
            group.push(curSlide);
            if (i + 1 === data.length && slidesInGroup > 1 && (i + 1) % slidesInGroup !== 0) {
                const lackOfSlides: number = slidesInGroup - data.length % slidesInGroup;
                for (let j = 0; j < lackOfSlides; j++) {
                    group.push({key: String(i + j)});
                }
                accumulator.push(group);
                return accumulator;
            }
            if ((i + 1) % slidesInGroup === 0) {
                accumulator.push(group);
                group = [];
                return accumulator;
            } else {
                return accumulator;
            }
        }, []);
    },
}