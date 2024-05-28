import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(()=>{ //depues de cada prueba
    cleanup();//limpia el dom
})