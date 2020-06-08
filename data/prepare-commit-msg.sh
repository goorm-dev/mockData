#!/bin/bash

# This way you can customize which branches should be skipped when
# prepending commit message.

MARK=\-CU\-

if [ -z "$BRANCHES_TO_SKIP" ]; then
  BRANCHES_TO_SKIP=(master develop release hotfix)
fi

BRANCH_NAME=$(git symbolic-ref --short HEAD)
BRANCH_NAME="${BRANCH_NAME##*/}"

BRANCH_EXCLUDED=$(printf "%s\n" "${BRANCHES_TO_SKIP[@]}" | grep -c "^$BRANCH_NAME$")
BRANCH_IN_COMMIT=$(grep -c "\[$BRANCH_NAME\]" $1)

CARD_ID_POS=`expr index "$BRANCH_NAME" $MARK`
CARD_ID_POS=$(($CARD_ID_POS))
CARD_ID=${BRANCH_NAME:CARD_ID_POS}

if [ -n "$BRANCH_NAME" ] && ! [[ $BRANCH_EXCLUDED -eq 1 ]] && ! [[ $BRANCH_IN_COMMIT -ge 1 ]]; then
  sed -i.bak -e "1s%$% ($CARD_ID)%" $1
fi