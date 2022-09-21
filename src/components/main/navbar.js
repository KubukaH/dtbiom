window.optionChange = function() {
  return {
    optionActive: true,
    optionInactive: true,
    activeEl: false,
    previousEl: false,
    elData: {
      topPos: 0,
      leftPos: 0,
      widthSize: 0,
      heightSize: 0,
    },
    findElData() {
      if (! this.activeEl) {
        return
      }
  
      this.elData.widthSize = `${this.activeEl.getBoundingClientRect().width}px` || 0
      this.elData.heightSize = `${this.activeEl.getBoundingClientRect().height}px` || 0
      this.elData.topPos = `${this.activeEl.offsetTop}px` || 0
      this.elData.leftPos = `${this.activeEl.offsetLeft}px` || 0
    },
    chn(oa) {
      this.optionActive = oa;
      this.previousEl = $el;
      this.activeEl = $el;
    }
  };
};

const navOption = 
`<div
    x-data="optionChange()"
    x-init="
      previousEl = optionActive ? $refs.optionActive : $refs.optionInacive
      activeEl = previousEl
    "
    x-effect="findElData"
    class="relative"
  >
  <span
    class="bg-amber-100 border border-amber-200 absolute transition-all duration-300 rounded-full"
    :style="{
      top: elData.topPos,
      left: elData.leftPos,
      width: elData.widthSize,
      height: elData.heightSize
    }"
  ></span>

  <div class="flex items-center gap-2 text-sm font-medium">
    <button
      class="rounded-full px-4 py-2 relative transition"
      x-on:click="chn(oa = true)"
      :class="{
        'text-amber-700': activeEl == $el,
        'text-gray-500 hover:text-amber-700': activeEl !== $el
      }"
      x-on:mouseover="activeEl = $el"
      x-on:mouseleave="activeEl = previousEl"
      x-ref="optionActive"
    >
      Dashboard
    </button>

    <button
      class="rounded-full px-4 py-2 relative transition"
      x-on:click="chn(oa = false)"
      :class="{
        'text-amber-700': activeEl == $el,
        'text-gray-500 hover:text-amber-700': activeEl !== $el
      }"
      x-on:mouseover="activeEl = $el"
      x-on:mouseleave="activeEl = previousEl"
      x-ref="optionActive"
    >
      Team
    </button>

    <button
      class="rounded-full px-4 py-2 relative transition"
      x-on:click="chn(oa = false)"
      :class="{
        'text-amber-700': activeEl == $el,
        'text-gray-500 hover:text-amber-700': activeEl !== $el
      }"
      x-on:mouseover="activeEl = $el"
      x-on:mouseleave="activeEl = previousEl"
      x-ref="optionActive"
    >
      Projects
    </button>

    <button
      class="rounded-full px-4 py-2 relative transition"
      x-on:click="chn(oa = false)"
      :class="{
        'text-amber-700':activeEl === $el,
        'text-gray-500 hover:text-amber-700': activeEl !== $el
      }"
      x-on:mouseover="activeEl = $el"
      x-on:mouseleave="activeEl = previousEl"
      x-ref="optionB"
    >
      Calender
    </button>
  </div>
</div>`

export function NavigationBar() {
  return (
    <nav class="flex items-center justify-between max-w-3xl p-4 mx-auto">
      <a
        class="inline-flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg"
        href="/"
      >
        👋
      </a>

      <ul class="flex items-center space-x-2 text-sm font-medium text-gray-500">
        <li class="hidden lg:block">
          <a class="px-3 py-2 rounded-lg" href="/"> Home </a>
        </li>

        <li><a class="px-3 py-2 rounded-lg" href=""> Projects </a></li>

        <li>
          <a
            class="inline-flex items-center px-3 py-2 rounded-lg"
            href=""
            target="_blank"
          >
            External
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="ml-1.5 w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              ></path>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
}
