<script>
    import Modal from './Modal.svelte';
    import MediaQuery from './MediaQuery.svelte';
    import { fade } from 'svelte/transition';

    export let image;
    export let name;
    export let visible = false;
    export let onClose = () => { visible = false };

</script>

{#if visible}
<div transition:fade>
    <Modal on:close={onClose}>
        <MediaQuery query="(max-width: 1350px)" let:matches>
            {#if matches}
                    <div>
                        <h1 class="text-center mt-24">{name}</h1>
                        <button on:click={close} title="Close" class="modal-close">Close</button>
                        <span class="divider uppercase text-md text-center mt-0"></span>
                        <div class="ml-4 mr-4 mb-4">
                            <slot class="text-2xl"/>
                        </div>
                    </div>
            {:else}
                <div class="flex" >
                    <img src="{image}" alt="" class="profile-image rounded-bl-2xl rounded-tl-2xl inline-block">
                    <div class="ml-4 mr-4 mb-4">
                        <h1>{name}</h1>
                        <span class="divider uppercase text-md text-center mt-0"></span>
                        <slot class="overflow-auto"/>
                    </div>
                </div>
            {/if}
        </MediaQuery>
    </Modal>
</div>

<!--<div class="modal is-open">-->
<!--    <div class="modal-container">-->
<!--        <div class="modal-left">-->
<!--            <h1 class="modal-title">{name}</h1>-->
<!--            <p class="modal-desc"><slot/></p>-->
<!--        </div>-->
<!--        <div class="modal-right">-->
<!--            <img src={image}  alt=""/>-->
<!--            <button class="icon-button close-button" on:click={onClose}>-->
<!--                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">-->
<!--                    <path d="M 25 3 C 12.86158 3 3 12.86158 3 25 C 3 37.13842 12.86158 47 25 47 C 37.13842 47 47 37.13842 47 25 C 47 12.86158 37.13842 3 25 3 z M 25 5 C 36.05754 5 45 13.94246 45 25 C 45 36.05754 36.05754 45 25 45 C 13.94246 45 5 36.05754 5 25 C 5 13.94246 13.94246 5 25 5 z M 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.980469 15.990234 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 z"></path>-->
<!--                </svg>-->
<!--            </button>-->
<!--        </div>-->

<!--    </div>-->
<!--</div>-->

{/if}

<style lang="scss">
h1 {
    @apply text-2xl font-bold mt-[1%];
}

.modal-close {
    color: #aaa;
    line-height: 50px;
    font-size: 80%;
    text-align: center;
    width: 70px;
    align-content: end;
    justify-content: end;
    text-decoration: none;

    &:hover {
     color: black;
    }
}

.profile-image {
    transition: all 0.3s ease-out;
    display: inline-block;
    position: relative;
    overflow: hidden;
    float: left;
    width: 450px;
    height: calc(450px * 1.25);
}
//
//.container {
//  height: 200vh;
//  background-image: url(https://images.unsplash.com/photo-1538137524007-21e48fa42f3f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ac9fa0975bd2ebad7afd906c5a3a15ab&auto=format&fit=crop&w=1834&q=80);
//  background-size: cover;
//  background-position: center;
//  background-repeat: no-repeat;
//}
//
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
//  transition: 0.4s;
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
//
//  &-title {
//    font-size: 26px;
//    margin: 0;
//    font-weight: 400;
//    color: #55311c;
//  }
//
//  &-desc {
//    margin: 6px 0 30px 0;
//  }
//
//  &-left {
//    padding: 60px 30px 20px;
//    background: #fff;
//    flex: 1.5;
//    transition-duration: 0.5s;
//    transform: translateY(80px);
//    opacity: 0;
//  }
//
//  &-button {
//    color: darken(#8c7569, 5%);
//    font-family: "Nunito", sans-serif;
//    font-size: 18px;
//    cursor: pointer;
//    border: 0;
//    outline: 0;
//    padding: 10px 40px;
//    border-radius: 30px;
//    background: rgb(255, 255, 255);
//    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.16);
//    transition: 0.3s;
//
//    &:hover {
//      border-color: rgba(255, 255, 255, 0.2);
//      background: rgba(#fff, 0.8);
//    }
//  }
//
//  &-right {
//    flex: 2;
//    font-size: 0;
//    transition: 0.3s;
//    overflow: hidden;
//
//    img {
//      width: 100%;
//      height: 100%;
//      transform: scale(2);
//      object-fit: cover;
//      transition-duration: 1.2s;
//    }
//  }
//
//  &.is-open {
//    height: 100%;
//    background: rgba(#333, 0.85);
//
//    .modal-button {
//      opacity: 0;
//    }
//
//    .modal-container {
//      opacity: 1;
//      transition-duration: 0.6s;
//      pointer-events: auto;
//      transform: translateY(0) scale(1);
//    }
//
//    .modal-right img {
//      transform: scale(1);
//    }
//
//    .modal-left {
//      transform: translateY(0);
//      opacity: 1;
//      transition-delay: 0.1s;
//    }
//  }
//
//  &-buttons {
//    display: flex;
//    justify-content: space-between;
//    align-items: center;
//
//    a {
//      color: rgba(#333, 0.6);
//      font-size: 14px;
//    }
//  }
//}
//
//.sign-up {
//  margin: 60px 0 0;
//  font-size: 14px;
//  text-align: center;
//
//  a {
//    color: #8c7569;
//  }
//}
//
//.input-button {
//  padding: 8px 12px;
//  outline: none;
//  border: 0;
//  color: #fff;
//  border-radius: 4px;
//  background: #8c7569;
//  font-family: "Nunito", sans-serif;
//  transition: 0.3s;
//  cursor: pointer;
//
//  &:hover {
//    background: #55311c;
//  }
//}
//
//.input-label {
//  font-size: 11px;
//  text-transform: uppercase;
//  font-family: "Nunito", sans-serif;
//  font-weight: 600;
//  letter-spacing: 0.7px;
//  color: #8c7569;
//  transition: 0.3s;
//}
//
//.input-block {
//  display: flex;
//  flex-direction: column;
//  padding: 10px 10px 8px;
//  border: 1px solid #ddd;
//  border-radius: 4px;
//  margin-bottom: 20px;
//  transition: 0.3s;
//
//  input {
//    outline: 0;
//    border: 0;
//    padding: 4px 0 0;
//    font-size: 14px;
//    font-family: "Nunito", sans-serif;
//
//    &::placeholder {
//      color: #ccc;
//      opacity: 1;
//    }
//  }
//
//  &:focus-within {
//    border-color: #8c7569;
//
//    .input-label {
//      color: rgba(#8c7569, 0.8);
//    }
//  }
//}
//
//.icon-button {
//  outline: 0;
//  position: absolute;
//  right: 10px;
//  top: 12px;
//  width: 32px;
//  height: 32px;
//  border: 0;
//  background: 0;
//  padding: 0;
//  cursor: pointer;
//}
//
//.scroll-down {
//  position: fixed;
//  top: 50%;
//  left: 50%;
//  display: flex;
//  flex-direction: column;
//  align-items: center;
//  text-align: center;
//  color: darken(#8c7569, 5%);
//  font-size: 32px;
//  font-weight: 800;
//  transform: translate(-50%, -50%);
//  svg {
//    margin-top: 16px;
//    width: 52px;
//    fill: currentColor;
//  }
//}
//
//
//@media(max-width: 750px) {
//  .modal-container {
//    width: 90%;
//  }
//  .modal-right {
//    display: none;
//  }
//}

</style>