// Modules
import { ReactNode } from 'react'
import { Skeleton, Stack } from "@mui/material";

export function TableSkeleton () {
  return (
    <Stack rowGap={2}>
      <Skeleton width='90%' variant='rounded' height={30} animation="wave"/>
      <Skeleton width={30} variant='circular' height={30} animation="wave"/>
      <Skeleton width='100%' variant='rounded' height={30} animation="wave"/>
      <Skeleton width='90%' variant='rounded' height={30} animation="wave"/>
      <Skeleton width='80%' variant='rounded' height={30} animation="wave"/>
    </Stack>
  )
}