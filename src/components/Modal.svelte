<script>
	import { createEventDispatcher, onDestroy } from 'svelte';
    import { fade } from "svelte/transition";

    const dispatch = createEventDispatcher();
	const close = () => dispatch('close');
  

	let modal;

	const handle_keyboard = (e) => {
		if (e.key === 'Escape') {
            close();
		}

		if (e.key === 'Tab') {
			const nodes = modal.querySelectorAll('*');
			const tabbable = Array.from(nodes).filter((n) => n.tabIndex >= 0);

			let index = tabbable.indexOf(document.activeElement);
			if (index === -1 && e.shiftKey) index = 0;

			index += tabbable.length + (e.shiftKey ? -1 : 1);
			index %= tabbable.length;

			tabbable[index].focus();
			e.preventDefault();
		}
	};

	const previously_focused = typeof document != 'undefined' && document.activeElement;

	if (previously_focused) {
		onDestroy(() => {
			previously_focused.focus();
		});
	}
</script>

<svelte:window on:keydown={handle_keyboard}/>

<div id="open-modal" class="modal-window" transition:fade>
    <div class="shadow-2xl">
        <button on:click={close} title="Close" class="modal-close">Close</button>
        <slot />
    </div>
</div>

<style lang="scss">
  .modal-window {
    position: fixed;
    background-color: rgba(255, 255, 255, 0.25);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
    & > div {
      width: auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: white;
    }
  }

  .modal-close {
    color: #aaa;
    line-height: 50px;
    font-size: 80%;
    position: absolute;
    right: 0;
    text-align: center;
    top: 0;
    width: 70px;
    text-decoration: none;
    &:hover {
      color: black;
    }
  }

  /* Demo Styles */

  html,
  body {
    height: 100%;
  }

  html {
    font-size: 18px;
    line-height: 1.4;
  }

  body {
    font-family: apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans,
    Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    font-weight: 600;
    background-image: linear-gradient(to right, #7f53ac 0, #657ced 100%);
    color: black;
  }

  span {
    color: inherit;
    text-decoration: none;
  }

  .modal-window {
    @apply shadow-2xl;
    & > div {
      border-radius: 1rem;
    }
  }

  .modal-window div:not(:last-of-type) {
    margin-bottom: 15px;
  }

  .logo {
    max-width: 150px;
    display: block;
  }

  small {
    color: lightgray;
  }

  @media only screen and (max-width: 1350px) {
    .modal-window {
      & > div {
        padding-top: 3vh;
        height: auto;
        width: 80vw;
      }
    }
  }
</style>