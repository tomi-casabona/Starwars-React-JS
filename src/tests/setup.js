import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";
import '@testing-library/jest-dom';


afterEach(()=>{ //depues de cada prueba
    cleanup();//limpia el dom
})