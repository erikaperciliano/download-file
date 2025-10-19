import { vi } from "vitest";
import "@testing-library/jest-dom";

globalThis.URL.createObjectURL = vi.fn(() => "mock-url");
globalThis.URL.revokeObjectURL = vi.fn();
