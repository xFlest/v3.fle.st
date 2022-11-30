<template>
<svg viewBox="0 0 200 100">
	<defs>
		<pattern width="19" height="18" patternUnits="userSpaceOnUse" id="dot">
			<circle cx="3" cy="3" r="3" fill="currentColor"/>
		</pattern>
	</defs>
	<rect width="200" height="100" fill="url(#dot)" />
</svg>
</template>

<style lang="scss" scoped>
svg {
  color: $sky;
  padding-left: 8px;
}
</style>