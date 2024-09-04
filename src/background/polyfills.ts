import { Buffer } from "buffer"
import * as stream from "stream-browserify"

;(window as any).Buffer = Buffer
;(window as any).process = { env: {} }
;(window as any).stream = stream
