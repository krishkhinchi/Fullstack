import React from "react";
import { useState } from "react";

export default function Login(){
    return <>
        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
          />
        </div>

        <button type="submit">Login</button>
    </>
}