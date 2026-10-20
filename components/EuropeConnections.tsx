/** Decorative conceptual European connections, not actual clinic locations or travel routes. */
export default function EuropeConnections() {
  return (
    <svg viewBox="0 0 680 530" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stylised map of Europe with abstract connection lines" className="w-full h-auto opacity-90">
      <defs>
        <radialGradient id="mapGlow"><stop stopColor="#87B2D5" stopOpacity=".25"/><stop offset="1" stopColor="#87B2D5" stopOpacity="0"/></radialGradient>
        <linearGradient id="mapLand" x1="80" y1="45" x2="580" y2="465"><stop stopColor="#617A94" stopOpacity=".29"/><stop offset="1" stopColor="#2C4A7A" stopOpacity=".09"/></linearGradient>
      </defs>
      <ellipse cx="363" cy="277" rx="300" ry="240" fill="url(#mapGlow)"/>
      <g fill="url(#mapLand)" stroke="#92AEC6" strokeOpacity=".4" strokeWidth="1.4" strokeLinejoin="round">
        <path d="M164 164 192 128 220 130 230 94 255 66 280 82 291 116 277 155 256 178 250 219 276 242 298 231 306 265 334 276 336 310 311 330 305 366 286 381 277 347 244 330 221 306 195 313 172 294 151 258 137 225Z"/>
        <path d="M294 225 327 205 349 176 376 187 396 170 424 184 444 209 473 204 506 224 532 217 562 247 547 278 571 307 544 330 526 355 499 360 475 342 448 351 425 328 395 338 377 314 353 331 333 308 311 300Z"/>
        <path d="M221 311 238 327 246 356 261 364 265 391 280 401 291 433 281 471 265 465 259 438 239 417 231 386 216 366 210 345Z"/>
        <path d="M125 184 104 171 101 146 114 130 127 139 133 159Z M114 226 96 238 90 264 103 277 119 260 127 241Z"/>
        <path d="M375 341 398 356 417 369 410 387 391 381 377 362Z M435 351 454 366 477 371 489 385 464 399 449 387Z"/>
        <path d="M541 181 565 192 577 211 565 228 549 221Z"/>
      </g>
      <g stroke="#A8C6DF" strokeWidth="1.6" strokeOpacity=".7" strokeDasharray="4 7">
        <path d="M217 253 Q325 110 468 290"/>
        <path d="M315 274 Q406 196 468 290"/>
        <path d="M407 237 Q438 250 468 290"/>
        <path d="M468 290 Q500 344 518 373"/>
      </g>
      <g fill="#E6F4FF" stroke="#7FADD0" strokeWidth="5" strokeOpacity=".23">
        <circle cx="217" cy="253" r="5"/><circle cx="315" cy="274" r="5"/><circle cx="407" cy="237" r="5"/><circle cx="468" cy="290" r="6"/><circle cx="518" cy="373" r="5"/>
      </g>
      <g fill="none" stroke="#B4CDE0" strokeOpacity=".16"><circle cx="468" cy="290" r="25"/><circle cx="468" cy="290" r="49"/></g>
    </svg>
  );
}
