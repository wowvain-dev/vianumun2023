<script>
    import { createEventDispatcher, onDestroy } from 'svelte';

    const dispatch = createEventDispatcher();
    const close = () => dispatch('close');

    let modal;

    const handle_keyboard = e => {
        if (e.key === 'Escape') {
            close();
            return;
        }

        if (e.key === 'Tab') {
            const nodes = modal.querySelectorAll('*');
            const tabbable = Array.from(nodes).filter(n => n.tabIndex >= 0);

            let index = tabbable.indexOf(document.activeElement);

        }
    }
</script>