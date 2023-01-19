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

    export let image;
    export let name;
    export let visible = false;
    export let onClose = () => { visible = false };

</script>

<svelte:window on:keydown={handle_keyboard}/>

{#if visible}
<div id="open-modal" class="modal">
    <div class="modal-container">
        <div class="modal-left">
            <h1 class="modal-title">{name}</h1>
            <div class="divider"></div>
            <div class="modal-description">
                <slot />
            </div>
        </div>
        <div class="modal-right">
            <img src="{image}"/>
            <button class="icon-button" on:click={close}>
                <svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <path d="M 25 3 C 12.86158 3 3 12.86158 3 25 C 3 37.13842 12.86158 47 25 47 C 37.13842 47 47 37.13842 47 25 C 47 12.86158 37.13842 3 25 3 z M 25 5 C 36.05754 5 45 13.94246 45 25 C 45 36.05754 36.05754 45 25 45 C 13.94246 45 5 36.05754 5 25 C 5 13.94246 13.94246 5 25 5 z M 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.980469 15.990234 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 z"></path>
                </svg>
            </button>
        </div>
    </div>
</div>
    {/if}

<style lang="scss">
  @keyframes fadeInAnimation {
    from {opacity: 0;} to {opacity: 1;}
  }
    .modal {
        animation-name: fadeInAnimation;
        animation-duration: .5s;
        animation-timing-function: ease;
        position: fixed;
        opacity: 1;
        background-color: rgba(#333, 0.6);
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 999;
        visibility: visible;
        pointer-events: auto;

        &-container {
          border-radius: 10px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          max-height: 500px;
          max-width: 900px;
          background: white;
          display: flex;
          flex-direction: row;
        }

      &-title {
        font-size: 26px;
        margin: 0;
        font-weight: 400;
        color: #55311c;
      }

      &-description {
        overflow: visible;
      }

      &-left {
        border-radius: 10px 0 0 10px;
        padding: 30px 30px 20px;
        background: #fff;
        flex: 1.5;
        transition-duration: 0.5s;
        //transform: translateY(80px);
        overflow: auto;
        opacity: 1;
        height: inherit;
      }

      &-right {
        @keyframes imageAnim {
          from {transform: scale(1.0)} to {transform: scale(1.5)}
        }

        border-radius: 0 10px 10px 0;
        flex: 2;
        font-size: 0;
        transition: .3s;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          transform: scale(1.5);
          object-fit: cover;
          animation-name: imageAnim;
          animation-duration: 1.5s;
        }
      }

      @media(max-width: 1000px) {
        .modal-container {
          width: 90%;
        }
        .modal-right {
          display: none;
        }
        .modal-left {
          border-radius: 10px;
        }
        .modal-title {
          text-align: center;
        }
      }

      .icon-button {
        border-radius: 0 10px 0 10px;
        background: #fff;
        position: absolute;
        top: 0;
        right: 0;
        //right: 10px;
        //top: 10px;
        width: 45px;
        height: 45px;
        border: 0;
        padding: 7px;
        cursor: pointer;
      }
    }

</style>