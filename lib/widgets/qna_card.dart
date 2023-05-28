import 'package:flutter/material.dart';

class MyQnACard extends StatelessWidget {
  const MyQnACard({
    Key? key,
    required this.question,
    required this.answer,
  }) : super(key: key);

  final String question;
  final String answer;

  @override
  Widget build(BuildContext context) {
    return Container(
      constraints: const BoxConstraints(maxWidth: 400),
      decoration: const BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.all(Radius.circular(10)),
      ),
      child: Padding(
        padding: const EdgeInsets.all(10),
        child: Column(
          children: [
            IntrinsicHeight(
              child: Row(
                children: [
                  SizedBox(
                    width: 20,
                    child: Text(
                      'Q',
                      style:
                          Theme.of(context).textTheme.headlineSmall?.copyWith(
                                color: Colors.blue[700],
                                fontWeight: FontWeight.bold,
                              ),
                    ),
                  ),
                  VerticalDivider(
                      color: Theme.of(context).colorScheme.secondaryContainer),
                  Flexible(
                    child: Padding(
                      padding: const EdgeInsets.only(bottom: 3),
                      child: SelectableText(
                        question,
                        style: Theme.of(context)
                            .textTheme
                            .titleMedium
                            ?.copyWith(color: Colors.black),
                      ),
                    ),
                  )
                ],
              ),
            ),
            IntrinsicHeight(
              child: Row(
                children: [
                  SizedBox(
                    width: 20,
                    child: Text(
                      'A',
                      style:
                          Theme.of(context).textTheme.headlineSmall?.copyWith(
                                color: Colors.red,
                                fontWeight: FontWeight.bold,
                              ),
                    ),
                  ),
                  VerticalDivider(
                      color: Theme.of(context).colorScheme.secondaryContainer),
                  Flexible(
                    child: Padding(
                      padding: const EdgeInsets.only(top: 3),
                      child: SelectableText(
                        answer,
                        style: Theme.of(context)
                            .textTheme
                            .titleMedium
                            ?.copyWith(color: Colors.black),
                      ),
                    ),
                  )
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
