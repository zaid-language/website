<template>
    <div>
        <Prism class="mb-6">class CoffeeMaker {
    function constructor(coffee) {
        this.coffee = coffee
    }

    function brew() {
        print('Enjoy your cup of %s'.format(this.coffee))
    }
}

maker = CoffeeMaker.new('espresso')

maker.brew()</Prism>

        <pre class="relative mx-auto bg-slate-800 text-slate-200 p-6 rounded shadow text-sm">>>> Enjoy your cup of espresso</pre>
    </div>
</template>

<script>
    export default {}
</script>
