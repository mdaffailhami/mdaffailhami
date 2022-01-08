import 'package:flutter/material.dart';
import 'package:simple_shadow/simple_shadow.dart';

class MyAboutMe extends StatelessWidget {
  const MyAboutMe({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      decoration: BoxDecoration(
        color: Theme.of(context).colorScheme.primary,
        borderRadius: const BorderRadius.only(
          bottomLeft: Radius.circular(10),
          bottomRight: Radius.circular(10),
        ),
      ),
      child: Center(
        child: SizedBox(
          width: 400,
          child: Padding(
            padding: const EdgeInsets.all(16),
            child: Column(
              children: [
                const SelectableText(
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu nibh, sagittis vel sem nec, dictum facilisis elit. Phasellus quis semper mi, ut laoreet odio. Phasellus id sem dolor. Integer quis mi vitae orci pharetra viverra. Sed nibh dolor, suscipit imperdiet mauris vitae, venenatis lacinia quam.',
                  textAlign: TextAlign.center,
                ),
                const SizedBox(height: 20),
                Wrap(
                  alignment: WrapAlignment.center,
                  spacing: 40,
                  children: const [
                    MySocmedBadge(
                      NetworkImage(
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png',
                      ),
                    ),
                    MySocmedBadge(
                      NetworkImage(
                          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png'),
                    )
                  ],
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class MySocmedBadge extends StatelessWidget {
  const MySocmedBadge(this.image, {Key? key}) : super(key: key);

  final ImageProvider image;

  @override
  Widget build(BuildContext context) {
    return SimpleShadow(
      color: Colors.white,
      sigma: 3,
      offset: const Offset(0, 0),
      opacity: 0.8,
      child: Image(
        image: image,
        width: 30,
      ),
    );
  }
}
