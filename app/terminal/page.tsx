'use client'

import React, { ChangeEvent, KeyboardEvent, KeyboardEventHandler, useState, useId } from 'react'
import Image from 'next/image';
import evLogo from "@/app/images/enticingVisions.png"
import styles from "./page.module.css"
import { v4 as uuidv4 } from "uuid";

type Props = {}

interface TerminalMessage {
  id: string;
  message: string;
}

interface TerminalLines {
  id: string;
  text: string;
  response: string;
}

const page = (props: Props) => {

  // let termPrompt = [{id: uuid4(), text="dev@marvintrujillo.dev:"}]


  let dirs = ["home, about, contact, projects"];
  let knownCommands = ["ls", "cd"]

  const [termLines, setTermLines] = useState<TerminalLines[]>([{ id: "1", text: "hackerman@192.168.32.12", response: "" }]);
  // console.log(termLines[0].id);


  // const [termLines, setTermLines] = useState<TerminalLines[]>([]);
  const [commandHistory, setCommandHistory] = useState<String[]>([]);
  // const [responses, setResponses] = useState<TerminalMessage[]>([]);


  function handleState(value: string, response: string, elementID: string) {
    // look for specific id and response via e.target.

    setCommandHistory([...commandHistory, value]);


    let element = termLines.filter(item => {
      return item.id == elementID;
    })
    
    console.log(element);
    // setTermLines([...termLines, { id: response, text: "hackerman@192.168.32.12", response: response }]);
    setTermLines(termLines.filter(item => {
      return item.id === elementID;
    }));
    
  }

  function enterCommand(e: KeyboardEvent) {
    // console.log(e);
    let value = (e.target as HTMLInputElement).value;

    // Need elementID two parents up
    let elementID = (e.target as HTMLInputElement).parentElement?.parentElement?.id;
    console.log(elementID);

    if (e.key === "Enter") {
      e.preventDefault();
      // handleState(value);
      if (value !== knownCommands[0]) {
        let response = "poop not found";
        handleState(value, response, elementID);
        // setResponses([...responses, { id: uuidv4(), message: "Command not found" }])
      }
    }
  }

  // ID issue happening with uuid4 on <p> tag where server doesn't correspond to the same as client, not sure I will need id for it, just a reminder.
  return (
    <div className={styles.main}>
      <Image
        className={styles.evLogo}
        src={evLogo}
        alt="No Image"
        width={100}
        height={100}
      ></Image>

      {/* TERMINAL TEXT */}
      <div className={styles.terminal}>
        <section className={styles.commandCenter}>
          {/* <p className={styles.termText}>hackerman@192.168.32.12
            <span style={{ color: "white" }}>:</span></p>
          <input className={styles.input}
            type="text"
            onKeyDown={enterCommand}
            autoFocus></input> */}
          {termLines.map(item => {
            return (
              <div key={item.id} id={item.id} className={styles.promptSection}>
                <div className={styles.inLineContainer}>
                  <p className={styles.termText}>{item.text}
                    <span style={{ color: "white" }}>:</span></p>
                  <input className={styles.input}
                    type="text"
                    onKeyDown={enterCommand}
                    autoFocus></input>
                </div>
                <p>{item.response}</p>
              </div>
            )
          })}
        </section>
      </div>
    </div>
  )
}

export default page


// Ran into ID issues w/ client/server using random ID's since it's rendered twice.
// Using Response from input as ID instead for now.