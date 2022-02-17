import 'package:flutter/material.dart';

class MyFooter extends StatelessWidget {
  const MyFooter({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: double.infinity,
      // height: 200,
      child: ColoredBox(
        color: Theme.of(context).colorScheme.background,
        child: Padding(
          padding: const EdgeInsets.symmetric(vertical: 20),
          child: Column(
            children: [
              SelectableText(
                '| Last update on November 8, 2021 |',
                style:
                    Theme.of(context).textTheme.caption?.copyWith(fontSize: 14),
              ),
              const SizedBox(height: 5),
              SelectableText(
                '| Released on February 8, 2021 |',
                style:
                    Theme.of(context).textTheme.caption?.copyWith(fontSize: 14),
              ),
              const SizedBox(height: 10),
              SelectableText(
                '--Built by Muhammad Daffa Ilhami--',
                style:
                    Theme.of(context).textTheme.caption?.copyWith(fontSize: 14),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
