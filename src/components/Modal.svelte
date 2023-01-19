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

<div id="open-modal" class="modal-window" >
    <div>
        <slot />
    </div>
</div>

<style lang="scss">
  .modal-left {

  }

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
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-height: 500px;
      max-width: 720px;
      background: white;
      display: flex;
      flex-direction: column;
    }
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


  //.modal {
  //  position: fixed;
  //  left: 0;
  //  bottom: 0;
  //  width: 100%;
  //  height: 60px;
  //  background: rgba(#333, 0.5);
  //  display: flex;
  //  flex-direction: column;
  //  align-items: center;
  //  justify-content: center;
  //  transition: .4s;
  //
  //  &-container {
  //    display: flex;
  //    max-width: 720px;
  //    width: 100%;
  //    border-radius: 10px;
  //    overflow: hidden;
  //    position: absolute;
  //    opacity: 0;
  //    pointer-events: none;
  //    transition-duration: 0.3s;
  //    background: #fff;
  //    transform: translateY(100px) scale(0.4);
  //  }
  //}
  //
  //@media (max-width: 750px) {
  //  .modal-container {
  //    width: 90%;
  //  }
  //  .modal-right {
  //    display: none;
  //  }
  //}


</style>